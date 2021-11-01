package com.dictionary.task.repository;

import com.dictionary.task.model.History;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoryRepository extends  JpaRepository<History,Integer> {

    @Query(value = "SELECT history.* FROM history ORDER BY ?3 LIMIT ?1, ?2", nativeQuery = true)
    public List<History> findAll(@Param("page") int page,@Param("perPage") int perPage, @Param("sort") String sort);

    @Query(value = "SELECT history.* FROM history WHERE DATE(history.execution_time) = ?1 ORDER BY ?4 LIMIT ?2, ?3", nativeQuery = true)
    public List<History> findByExecutionTime(@Param("date") String date,@Param("page") int page,@Param("perPage") int perPage, @Param("sort") String sort);

    @Query(value = "SELECT history.* FROM history WHERE history.request_query LIKE %?1% ORDER BY ?4 LIMIT ?2, ?3", nativeQuery = true)
    public List<History> findByRequestQuery(@Param("query") String query, @Param("page") int page,@Param("perPage") int perPage, @Param("sort") String sort);

    @Query(value = "SELECT history.* FROM history WHERE history.response LIKE %?1% or history.response LIKE %?2% ORDER BY ?5 LIMIT ?3, ?4", nativeQuery = true)
    public List<History> findByResponse(@Param("name") String name, @Param("phoneNumber") String phoneNumber, @Param("page") int page,@Param("perPage") int perPage, @Param("sort") String sort);

}
