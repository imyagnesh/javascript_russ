const form = document.getElementById('issueInputForm');

const saveIssue = (event) => {
    var issueDescInput = document.getElementById('issueDescInput').value;
    var issueSeverityInput = document.getElementById('issueSeverityInput').value;
    var issueAssignedToInput = document.getElementById('issueAssignedToInput').value;
    var id = new Date().valueOf();
    var issueStatus = 'Open';

    var issue = {
        id: id,
        description: issueDescInput,
        severity: issueSeverityInput,
        assignedTo: issueAssignedToInput,
        status: issueStatus
    }

    const issues = localStorage.getItem('issues');
    if(issues === null) {
        localStorage.setItem('issues', JSON.stringify([issue]));
    } else {
        const objIssues = JSON.parse(issues);
        objIssues.push(issue);
        localStorage.setItem('issues', JSON.stringify(objIssues));
    }

    form.reset();

    displayData();
    
    event.preventDefault();
    console.log('button clicked');
}

const closeIssue = (id) => {
    const issues = JSON.parse(localStorage.getItem('issues'));
    if(issues) {
        const newList = issues.map(x => {
            if(x.id === id) {
                return {...x, status: 'Close'}
            }
            return x;
        });
        localStorage.setItem('issues', JSON.stringify(newList));
        displayData();
    }
}


const deleteIssue = (id) => {
    const issues = JSON.parse(localStorage.getItem('issues'));
    if(issues) {
        const newList = issues.filter(x => x.id !== id);
        localStorage.setItem('issues', JSON.stringify(newList));
        displayData();
    }
}

const displayData = () => {
    const issues = JSON.parse(localStorage.getItem('issues'));
    console.log(issues);
    const issueList = document.getElementById('issueList');
    issueList.innerHTML =  '';

    if(issues) {
        for (let i = 0; i < issues.length; i++) {
            issueList.innerHTML += `<div class="well">
            <h6>Issue Id: ${issues[i].id}</h6>
            <p>
                <span class="label label-info">${issues[i].status}</span>
            </p>
            <h3>${issues[i].description}</h3>
            <p><span class="glyphicon glyphicon-time"></span> ${issues[i].severity} </p>
            <p><span class="glyphicon glyphicon-user"></span> ${issues[i].assignedTo} </p>
            <a href="#" onClick="closeIssue(${issues[i].id})" class="btn btn-warning">Close</a>
            <a href="#" onClick="deleteIssue(${issues[i].id})" class="btn btn-danger">Delete</a>
        </div>`
        }
    }
}

displayData();


form.addEventListener('submit', saveIssue);

