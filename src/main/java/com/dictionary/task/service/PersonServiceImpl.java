package com.dictionary.task.service;

import com.dictionary.task.model.Person;
import com.dictionary.task.repository.HistoryRepository;
import com.dictionary.task.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {
    @Autowired
    private PersonRepository personRepository;

    // Get methods
    @Override
    public List<Person> findAll() {
        return personRepository.findAll();
    }

    @Override
    public List<Person> findBySearchField(String query,int page,int perPage) {
        int spage=1;
        return personRepository.findBySearchField(query,spage-1,perPage);
    }

    @Override
    public List<Person> findByName(String name) {
        return personRepository.findByName(name);
    }

    @Override
    public List<Person> find10TopBy() {
        return personRepository.findTop10By();
    }

    @Override
    public List<Person> findByPhoneNumber(String phoneNumber) {
        return personRepository.findByPhoneNumber(phoneNumber);
    }

    // Post methods
    @Override
    public Person savePerson(Person dictionary) {
        return personRepository.save(dictionary);
    }
}
