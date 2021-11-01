package com.dictionary.task.controller;

import com.dictionary.task.model.History;
import com.dictionary.task.model.Person;
import com.dictionary.task.service.HistoryServiceImpl;
import com.dictionary.task.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class HistoryController {
    @Autowired
    private HistoryServiceImpl historyService;

    @GetMapping("/phone-numbers/autocomplete/history")
    public List<History> findAlHistoryWhereResultNameOrPhoneNumberOrSearchQuery(@Param("name") String name,
                                                                                @Param("phoneNumber") String phoneNumber,
                                                                                @Param("query")String query,
                                                                                @Param("date")String date,
                                                                                @Param("sort")String sort,
                                                                                @Param("page")String page,
                                                                                @Param("perPage")String perPage)
    {

        String pag= "1",perPag= "10";
        if(page != null && page.length()>0) {
            pag=page;
        }
        if(perPage != null && perPage.length()>0) {
            perPag = perPage;
        }
        System.out.print("pag"+pag+"per"+perPag);
        String sor="id asc";
        if(sort != null && sort.length()>0) {
            sor=sort+" asc";
        }
        if(sort != null && sort.equalsIgnoreCase("date")) {
            sor = "execution_time asc";
        }
        if(query!=null && query.length()>0) {
            return historyService.findByQuery(query,Integer.parseInt(pag),Integer.parseInt(perPag),sor);
        } else if((name!=null && name.length()>0) || (phoneNumber!=null && phoneNumber.length()>0)) {
            return historyService.findByResponse(name,phoneNumber,Integer.parseInt(pag),Integer.parseInt(perPag),sor);
        } else if(name!=null && date.length()>0) {
            return historyService.findByDate(date,Integer.parseInt(pag),Integer.parseInt(perPag),sor);
        }
        return historyService.findAll(Integer.parseInt(pag),Integer.parseInt(perPag),sor);
    }

    @GetMapping("/history/{id}")
    public History getHistoryItemById(@PathVariable(value = "id") Integer id) {
        return historyService.findById(id);
    }


    @PostMapping("/history/add")
    public History addHistoryItem (@RequestBody History history) {
        System.out.print("histtoey time " + history.getExecutionTime() + " fvsfv" + history.getEndpointExecutionTime());
        historyService.saveHistoryItem(history);
        return historyService.saveHistoryItem(history);
    }

    @PutMapping("/history/update/{id}")
    public ResponseEntity updateHistoryItem(@PathVariable(value = "id") Integer id, History history) {
        History historyToUpdate = historyService.findById(id);
        historyToUpdate.setRequestQuery(history.getRequestQuery());
        historyToUpdate.setResponse(history.getResponse());
        if(history.getExecutionTime() != null) {
            historyToUpdate.setExecutionTime(history.getExecutionTime());
        }
        historyToUpdate.setEndpointExecutionTime(history.getEndpointExecutionTime());

        final History savedHistoryItem = historyService.saveHistoryItem(historyToUpdate);

       return ResponseEntity.ok(savedHistoryItem);
    }

}
