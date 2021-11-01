package com.dictionary.task.service;

import com.dictionary.task.model.Person;

import java.util.List;

public interface PersonService {
    public List<Person> findAll();
    public List<Person> findBySearchField(String query,int page,int perPage);
    public List<Person> findByName(String name);
    public List<Person> find10TopBy();
    public List<Person> findByPhoneNumber(String phoneNumber);

    public Person savePerson(Person dictionary);

}
