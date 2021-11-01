package com.dictionary.task.controller;

import com.dictionary.task.model.Person;
import com.dictionary.task.service.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
//@RequestMapping("/api/v1/phone-numbers")
public class PersonController {
    @Autowired
    private PersonServiceImpl personService;


    @GetMapping("/api/v1/phone-numbers/autocomplete")
    public List<Person> findBySearchField(@Param("query") String query,@Param("page") String page,@Param("perPage") String perPage){
        int spage=1,sperPage=10;
        if(page!=null && page.length()>0) {
            spage=Integer.parseInt(page);
        }
        if(perPage!=null && perPage.length()>0) {
            sperPage=Integer.parseInt(perPage);
        }

        if(query!=null && query.length()>0) {
            return personService.findBySearchField(query,spage,sperPage);
        }
        return personService.findAll(spage,sperPage);
    }

    @GetMapping("/api/v2/phone-numbers/autocomplete")
    public int findBySearchField(@Param("query") String query) {
        if (query != null && query.length() > 0) {
            return personService.findBySearchField(query);
        }
        return personService.findAll();
    }

    @PostMapping("/add")
    public String add (@RequestBody Person person) {
        personService.savePerson(person);
        return "New person is added to dictionary";
    }
}
