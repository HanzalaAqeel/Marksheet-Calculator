function calculate() {

    let subject1obt = document.querySelector("#subject1obt").value;
    let subject2obt = document.querySelector("#subject2obt").value;
    let subject3obt = document.querySelector("#subject3obt").value;
    let subject4obt = document.querySelector("#subject4obt").value;
    let subject5obt = document.querySelector("#subject5obt").value;
    let subject6obt = document.querySelector("#subject6obt").value;
    let subject7obt = document.querySelector("#subject7obt").value;
    let subject8obt = document.querySelector("#subject8obt").value;
    let subject9obt = document.querySelector("#subject9obt").value;
    let subject10obt = document.querySelector("#subject10obt").value;

    subject1obt = Number(subject1obt)
    subject2obt = Number(subject2obt)
    subject3obt = Number(subject3obt)
    subject4obt = Number(subject4obt)
    subject5obt = Number(subject5obt)
    subject6obt = Number(subject6obt)
    subject7obt = Number(subject7obt)
    subject8obt = Number(subject8obt)
    subject9obt = Number(subject9obt)
    subject10obt = Number(subject10obt)

    let subject1ttl = document.querySelector("#subject1ttl").value;
    let subject2ttl = document.querySelector("#subject2ttl").value;
    let subject3ttl = document.querySelector("#subject3ttl").value;
    let subject4ttl = document.querySelector("#subject4ttl").value;
    let subject5ttl = document.querySelector("#subject5ttl").value;
    let subject6ttl = document.querySelector("#subject6ttl").value;
    let subject7ttl = document.querySelector("#subject7ttl").value;
    let subject8ttl = document.querySelector("#subject8ttl").value;
    let subject9ttl = document.querySelector("#subject9ttl").value;
    let subject10ttl = document.querySelector("#subject10ttl").value;

    subject1ttl = Number(subject1ttl)
    subject2ttl = Number(subject2ttl)
    subject3ttl = Number(subject3ttl)
    subject4ttl = Number(subject4ttl)
    subject5ttl = Number(subject5ttl)
    subject6ttl = Number(subject6ttl)
    subject7ttl = Number(subject7ttl)
    subject8ttl = Number(subject8ttl)
    subject9ttl = Number(subject9ttl)
    subject10ttl = Number(subject10ttl)

    let Obtainedmarks = subject1obt + subject2obt + subject3obt + subject4obt + subject5obt + subject6obt + subject7obt + subject8obt + subject9obt + subject10obt
    document.querySelector("#totalmarks").innerHTML = `Total Marks = ${Obtainedmarks}`;

    let Totalmarks = subject1ttl + subject2ttl + subject3ttl + subject4ttl + subject5ttl + subject6ttl + subject7ttl + subject8ttl + subject9ttl + subject10ttl

    let Percentage = (Totalmarks / Obtainedmarks) * 100
    let Percent = Math.trunc( Percentage )
    document.querySelector("#percentage").innerHTML = `Percentage = ${Percent}%`;

    if (Percentage > 85) {
        document.querySelector("#grade").innerHTML = `Your Grade is = A+`;
    }
    else if (Percentage > 75) {
        document.querySelector("#grade").innerHTML = `Your Grade is = A`;
    }
    else if (Percentage > 65) {
        document.querySelector("#grade").innerHTML = `Your Grade is = B`;
    }
    else if (Percentage > 55) {
        document.querySelector("#grade").innerHTML = `Your Grade is = C`;
    }
    else if (Percentage > 45) {
        document.querySelector("#grade").innerHTML = `Your Grade is = D`;
    }
    else {
        document.querySelector("#grade").innerHTML = `Your Grade is = Fail`;
    }

}