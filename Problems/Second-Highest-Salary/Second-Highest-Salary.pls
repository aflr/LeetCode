/* Write your PL/SQL query statement below */
SELECT max(salary) "SecondHighestSalary" FROM Employee
WHERE salary != (SELECT max(salary) FROM Employee);
