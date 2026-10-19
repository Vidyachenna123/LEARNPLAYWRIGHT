enum Severity {
    LOW = "low severity you can proceed!",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}

console.log(Severity.LOW);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"

}

console.log(Environment.QA);

