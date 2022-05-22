package br.com.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    public ContactRepository contactRepository;

    @Override
    public void createContact(Contact contact) {
        this.contactRepository.save(contact);

    }

    @Override
    public void removeContact(Long id) {
        this.contactRepository.deleteById(id);
    }
}
