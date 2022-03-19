console.log('test 1...2...1...2..Everything is ok !');

const app = {
    //^VARIABLES
    headerBanner: document.querySelector('#header-banner'),
    totalVote: base.vote.hercule + base.vote.cesar,
    activitiesArray: base.activities,
    //~state
    person: {
        name: "Hercule",
        job: "Demi-dieu",
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true
    },
    friends: [
        'Jupiter',
        'Junon',
        'Alcmène',
        'Déjanire'
    ],
    essai: function () {
        console.log(base)
    },

    //^INIT
    init: function () {
        base.fillProfil(app.person);
        base.printFriends(app.friends);
        base.setBestFriend(app.friends[0]);
        app.addTitle();
        app.displayWork();
        app.availability();
        app.addPseudo();
        app.menuToggler();
        app.formSubmit();
        app.herculePopularity();
        app.cesarPopularity();
        app.activitiesTask();
    },
    //^FUNCTIONS
    //~add title
    addTitle: function () {
        let createTitle = document.createElement('h1');
        createTitle.classList.add('banner__title');
        createTitle.textContent = 'Vous consultez le profil de Hercule';
        app.headerBanner.appendChild(createTitle);
    },
    //~display work
    displayWork: function () {
        for (let display = 0; display <= 11; display++) {
            base.displayWork(display);
        }
    },
    //~availability
    availability: function () {
        let getHour = base.getHour()
        let availabilityStatus = document.querySelector('#availability');

        if (getHour >= 8 && getHour <= 20) {
            availabilityStatus.textContent = "Disponible"
        } else {
            availabilityStatus.textContent = "Non disponible";
            availabilityStatus.classList.add('off');
        }
    },
    //~get pseudo
    getPseudo: function (name, department) {
        /* CORRECTION PAS BESOIN DE FAIRE DES VAR
        let addName = name;
        let addDepartment = department; */

        let getPseudo = `${name}-du-${department}`;

        return getPseudo;
    },
    //~add new pseudo
    addPseudo: function () {
        let getPseudo = this.getPseudo(app.person.name, app.person.department);
        let profilName = document.querySelector('#profil-name');

        profilName.textContent = getPseudo;
    },
    //~menu toggler
    menuToggler: function () {
        let getMenuBtn = document.querySelector('#menu-toggler');

        getMenuBtn.addEventListener('click', (event) => {

            app.headerBanner.classList.toggle('banner--open');

            /* CORRECTION NO NEED IF ELSE HERE
            if (app.headerBanner.classList.contains('banner--open')) {
                app.headerBanner.classList.remove('banner--open');
            } else {
                app.headerBanner.classList.add('banner--open')
            } */
        })
    },
    //~form submit
    formSubmit: function () {
        let getForm = document.querySelector('#contact');

        getForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Hercule ne souhaite pas être dérangé');
        })
    },
    //~Hercule popularity
    herculePopularity: function () {

        let voteHercule = Math.round(this.average(base.vote.hercule, app.totalVote)) + '%';

        //popularity
        let addHerculePop = document.querySelector('#trends-hercule .people__popularity');
        //! can put 2 selectors in one
        addHerculePop.textContent = voteHercule;
        //progres bar
        let addProgressBar = document.querySelector('#trends-hercule .people__bar');
        addProgressBar.style.width = voteHercule;

        return voteHercule;
    },
    //~Cesar popularity
    cesarPopularity: function () {
        let voteCesar = Math.round(this.average(base.vote.cesar, app.totalVote)) + '%';

        //popularity
        let addCesarPop = document.querySelector('#trends-cesar .people__popularity');
        addCesarPop.textContent = voteCesar;
        //progress bar
        let addProgressBar = document.querySelector('#trends-cesar .people__bar');
        addProgressBar.style.width = voteCesar;

        return voteCesar;
    },
    //~average vote calculation
    average: function (vote, total) {
        let getAverage = (vote / total) * 100;
        return getAverage;
    },
    //~activities
    activitiesTask: function () {
        let activitiesElement = document.querySelector('#activities');
        activitiesElement.classList.remove('hidden');

        let tasksToDo = this.tasks(false, app.activitiesArray);

        app.addTask(tasksToDo);
        app.taskDone();

    },
    //~add task
    addTask: function (task) {
        let getTaskList = document.querySelector('#activities').querySelector('ul');
        let createTask = document.createElement('li');
        getTaskList.appendChild(createTask);

        createTask.textContent = "A rédiger : " + task;
    },
    //~tasks not finished
    tasks: function (key, inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].finished === key) {
                return inputArray[i].title;
            }
        }
    },
    //~finished tasks
    getFinishedActivitiesTitle: function () {
        const currentUserName = app.person.name;
        const activitiesTitle = [];

        for (const activity of base.activities) {
            if (activity.author === currentUserName && activity.finished) {
                activitiesTitle.push(activity.title);
            }
        }

        return activitiesTitle; // Il aurait fallu ensuite boucler sur ce tableau afin d'ajouter un li pour chaque titre
    },
    taskDone: function () {
        let getTaskList = document.querySelector('#activities').querySelector('ul');

        let tasksFinished = app.getFinishedActivitiesTitle();

        for (let x = 0; x < tasksFinished.length; x++) {
            let createTask = document.createElement('li');
            getTaskList.appendChild(createTask);
            createTask.textContent = "Articles terminés : " + tasksFinished[x];
        }
    }

}




//^PLAY THE GAME =)
app.init();