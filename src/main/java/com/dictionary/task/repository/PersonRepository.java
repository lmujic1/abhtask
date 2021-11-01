package com.dictionary.task.repository;

import com.dictionary.task.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person,Integer> {

    @Query(value = "select person.* from person where replace(replace(person.phone_number,\"-\",\"\"),\" \",\"\") LIKE ?1% ORDER BY LENGTH(person.phone_number) ASC limit ?2,?3",nativeQuery = true)
    public List<Person> findBySearchField(@Param("query") String query,@Param("page") int page, @Param("perPage") int perPage);
    @Query(value = "select person.* from person where replace(replace(person.phone_number,\"-\",\"\"),\" \",\"\") LIKE ?1% ",nativeQuery = true)
    public List<Person> findBySearchField(@Param("query") String query);
    public List<Person> findByName(@Param("name") String name);
    public List<Person> findByPhoneNumber(@Param("phoneNumber") String phoneNumber);
    public List<Person> findTop10By();
    public List<Person> findAll();


    @Query(value = "SELECT person.* FROM person LIMIT ?1,?2",nativeQuery = true)
    public List<Person> findAll(@Param("page") int page, @Param("perPage") int perPage);
}
