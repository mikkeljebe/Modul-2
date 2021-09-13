    //hjelpevariabler
    var tasksTable = document.getElementById('tasksTable');
  var taskDescriptionInput = document.getElementById('taskDescription');
  var taskAnsvarInput = document.getElementById('taskAnsvar');
  var taskFristInput = document.getElementById('taskFrist');
    
    // Model
    var tasks = [
      { description: 'Handle til middag', isDone: false, ansvar: ''},
      { description: 'Lage middag', isDone: false, ansvar: 'Mona' },
      { description: 'Spise middag', isDone: false, ansvar: 'Mona' },
  ];


  // View
  
  show();

  function show() {
      let html = `
                      <tr>
                      <th>Gjort</th>
                          <th>Oppgave</th>
                         
                          <th>Ansvarlig</th>
                          <th>Frist</th>
                          <th>Gjort dato</th>
                          
                          <th></th>
                      </tr>
                      
                      `;
      for (let i = 0; i < tasks.length; i++) {
          html += createHtmlRow(i);
      }
      tasksTable.innerHTML = html;
  }

  function createHtmlRow(i) {
      const task = tasks[i];
      const checkedHtml = task.isDone ? 'checked="checked"' : '';
      if (!task.editMode)
          return `<tr>
                          <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                          <td>${task.description}</td>
                          <td>${task.ansvar}</td>
                          <td>${task.frist || ''}</td>
                          <td>${task.gjortDato || ''}</td>
                          <td>
                              <button onclick="deleteTask(${i})">Slett</button>
                              <button onclick="editTask(${i})">Rediger</button>
                          </td>
                      </tr>
                      `;
      return `<tr>
                          <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                          <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                          <td><input id="editAnsvar${i}" type="text" value="${task.ansvar}"/></td>
                          <td><input id="editFrist${i}" type="date" value="${task.frist}"/></td>
                          <td><input id="editGjortDato${i}" type="date" value="${task.gjortDato}"/></td>
                         
                          <td>
                              <button onclick="updateTask(${i})">Lagre</button>
                          </td>
                      </tr>
                      `;
  }



  // Controller
  

  function addTask() {
      tasks.push({
          description: taskDescriptionInput.value,
          isDone: false,
          ansvar: taskAnsvarInput.value,
          frist: taskFristInput.value,
      });
      console.log(taskFristInput.value);
      
      taskDescriptionInput.value = '';
      taskAnsvarInput.value = '';
      taskFristInput.value = '';
      show();
  }

  function changeIsDone(checkbox, index) {
      tasks[index].isDone = checkbox.checked;
      let utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      checkbox.checked ? tasks[index].gjortDato = utc : tasks[index].gjortDato ='';
      show();
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      show();
  }

  function editTask(index) {
      tasks[index].editMode = true;
      show();
  }

  function updateTask(index) {
      const id = `editDescription${index}`;
      const ansvar = `editAnsvar${index}`;
      const frist = `editFrist${index}`;
      const descriptionTag = document.getElementById(id);
      const ansvarTag = document.getElementById(ansvar);
      const fristTag = document.getElementById(frist);
      const task = tasks[index];
      task.description = descriptionTag.value;
      task.ansvar = ansvarTag.value;
      task.frist = fristTag.value;
      task.editMode = false;
      show();
  }