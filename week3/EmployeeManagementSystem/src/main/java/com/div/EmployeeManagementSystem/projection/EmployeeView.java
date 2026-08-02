package com.div.EmployeeManagementSystem.projection;

import org.springframework.beans.factory.annotation.Value;

public interface EmployeeView {

    String getName();

    String getEmail();

    @Value("#{target.department.name}")
    String getDepartmentName();
}