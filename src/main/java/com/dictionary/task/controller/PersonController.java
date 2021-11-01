package com.dictionary.task.controller;

import com.dictionary.task.model.Person;
import com.dictionary.task.service.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
//@RequestMapping("/api/v1/phone-numbers")
public class PersonController {
    @Autowired
    private PersonServiceImpl personService;

   /* @GetMapping("/api/v1/phone-numbers/autocomplete")
    public List<Person> findall(){
        return personService.findAll();
    }*/

    @GetMapping("/api/v1/phone-numbers/autocomplete")
    public List<Person> findBySearchField(@RequestParam("query") String query){
        if(query.length()>0) {
            return personService.findBySearchField(query);
        }
        return personService.find10TopBy();
    }

   /* @GetMapping("/api/v1/phone-numbers/autocomplete")
    public List<Person> findBySearchField(@RequestParam("query") String query){
        return personService.findBySearchField(query);
    }*/

    @PostMapping("/add")
    public String add (@RequestBody Person person) {
        personService.savePerson(person);
        return "New person is added to dictionary";
    }
}
