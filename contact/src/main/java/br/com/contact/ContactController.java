package br.com.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createContact(@RequestBody Contact contact){
        this.contactService.createContact(contact);
        System.out.println("Cadastro realizado com sucesso!");
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void removeContact(@PathVariable Long id){
        this.contactService.removeContact(id);
        System.out.println("Cadastro removido com sucesso!");
    }

}
