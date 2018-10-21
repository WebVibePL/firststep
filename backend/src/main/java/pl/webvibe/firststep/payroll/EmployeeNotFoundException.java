package pl.webvibe.firststep.payroll;

public class EmployeeNotFoundException extends RuntimeException {
    private final Long id;

    public EmployeeNotFoundException(Long id) {
        this.id = id;
    }

    @Override
    public String getMessage() {
        return  String.format("Employee with id %d not found", id);
    }
}
