package com.library.controller;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BookController {

    @Autowired
    BookRepository repository;

    @PostMapping("/books")
    public Book saveBook(@RequestBody Book book){
        return repository.save(book);
    }

    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable int id){
        return repository.findById(id).orElse(null);
    }

    @DeleteMapping("/books/{id}")
    public String deleteBook(@PathVariable int id){
        repository.deleteById(id);
        return "Book Deleted";
    }

}