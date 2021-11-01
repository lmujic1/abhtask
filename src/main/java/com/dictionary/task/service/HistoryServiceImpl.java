package com.dictionary.task.service;

import com.dictionary.task.model.History;
import com.dictionary.task.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HistoryServiceImpl implements HistoryService{
    @Autowired
    private HistoryRepository historyRepository;


    @Override
    public History findById(Integer id) {
        return historyRepository.getById(id);
    }

    @Override
    public List<History> findAll(int page, int perPage, String sort) {
        return null;
    }

    @Override
    public List<History> findByDate(String date, int page, int perPage, String sort) {
        return historyRepository.findByExecutionTime(date,page-1,perPage,sort);
    }


    @Override
    public List<History> findByQuery(String query, int page, int perPage, String sort) {
        return historyRepository.findByRequestQuery(query,page-1,perPage,sort);
    }

    @Override
    public List<History> findByResponse(String name, String phoneNumber, int page, int perPage, String sort) {
        return historyRepository.findByResponse(name,phoneNumber,page-1, perPage,sort);
    }


    @Override
    public History saveHistoryItem(History history) {
        return historyRepository.save(history);
    }
}
