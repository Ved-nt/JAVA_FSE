/*Scenario1-Apply 1% Discount for Customers Above 60*/
BEGIN
    FOR rec IN (
        SELECT c.CustomerID, l.LoanID
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60
    ) LOOP

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;

        DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ' || rec.CustomerID);

    END LOOP;

    COMMIT;
END;
/

/*Scenario2-Promote Customers to VIP*/
BEGIN
    FOR rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    ) LOOP

        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE('Customer ' || rec.CustomerID || ' promoted to VIP.');

    END LOOP;

    COMMIT;
END;
/

/*Scenario3-Loan Reminder*/
BEGIN
    FOR rec IN (
        SELECT c.CustomerName, l.LoanID, l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' || rec.CustomerName ||
            ', Loan ID ' || rec.LoanID ||
            ' is due on ' || rec.DueDate
        );

    END LOOP;
END;
/
