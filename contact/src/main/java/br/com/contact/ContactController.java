package br.com.contact;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins="*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createContact(@RequestBody Contact contact){
        this.contactService.createContact(contact);
        System.out.println("Cadastrado com sucesso!");
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void removeContact(@PathVariable Long id){
        this.contactService.removeContact(id);
        System.out.println("Removido com sucesso!");
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Contact>> getAllContact(){
        return ResponseEntity.ok().body( this.contactService.getAllContact());
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateContact(@PathVariable Long id, @RequestBody Contact contact){
        Contact contactBD = this.contactService.findByIdContact(id);
        BeanUtils.copyProperties(contact, contactBD, "id");
        this.contactService.createContact(contactBD);
        System.out.println("Atualizado com sucesso!");
    }

}
