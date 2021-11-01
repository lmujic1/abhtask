package com.dictionary.task.model;

import javax.persistence.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "request_query")
    private String requestQuery;

    @Column(name = "response")
    private String response;

    @GeneratedValue
    @Column(name = "execution_time")
    private LocalDateTime executionTime;

    @Column(name = "endpoint_execution_time")
    private  LocalDateTime endpointExecutionTime;


    public History() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRequestQuery() {
        return requestQuery;
    }

    public void setRequestQuery(String requestQuery) {
        this.requestQuery = requestQuery;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public LocalDateTime getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(LocalDateTime executionTime) {
        if(executionTime == null)
            this.executionTime = LocalDateTime.now();
        else
            this.executionTime = executionTime;
    }

    public LocalDateTime getEndpointExecutionTime() {
        return endpointExecutionTime;
    }

    public void setEndpointExecutionTime(LocalDateTime endpointExecutionTime) {
        if(endpointExecutionTime == null) {
            this.endpointExecutionTime = LocalDateTime.now();
        }
        else this.endpointExecutionTime = endpointExecutionTime;
    }


}
