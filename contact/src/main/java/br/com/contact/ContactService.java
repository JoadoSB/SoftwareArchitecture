package br.com.contact;

import java.util.List;

public interface ContactService {
    public void createContact(Contact contact);
    public void removeContact(Long id);

    public List<Contact> getAllContact();
}
