package com.dictionary.task.service;

import com.dictionary.task.model.History;

import java.util.List;

public interface HistoryService {


    // Get Method
    public History findById(Integer id);

    public List<History> findAll(int page,int perPage, String sort);

    public List<History> findByDate(String date,int page,int perPage, String sort);

    public List<History> findByQuery(String query,int page,int perPage, String sort);

    public List<History> findByResponse(String name, String phoneNumber, int page,int perPage, String sort);

    public History saveHistoryItem(History history);

}
