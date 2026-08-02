package com.div.EmployeeManagementSystem.repository;

import com.div.EmployeeManagementSystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Override
    <S extends Employee> List<S> saveAll(Iterable<S> entities);
}