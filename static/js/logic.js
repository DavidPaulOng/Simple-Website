const sidebar = document.getElementById('sidebar');
const clickable = document.getElementById('clickable');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const abouttext = document.getElementById('SelectionAbout');


function show(){
    sidebar.classList.toggle('active');
}

function padorupadoru(){
    alert('PADORU PADORU');
}


const data1 = [
    { year: 2010, count: 28 },
    { year: 2011, count: 30 },
    { year: 2012, count: 22},
    { year: 2013, count: 15 },
    { year: 2014, count: 17 },
    { year: 2015, count: 14 },
    { year: 2016, count: 10 },
];

const data2 = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

const data3 = [
    { year: 2010, count: 10 },
    { year: 2011, count: 30 },
    { year: 2012, count: 28 },
    { year: 2013, count: 5 },
    { year: 2014, count: 45 },
    { year: 2015, count: 37 },
    { year: 2016, count: 20 },
];




function createchart(data) {

const myChart = new Chart("myChart", {
    type: "line",

    data: {
        labels: data.map(row=>row.year),
        datasets: [{
            backgroundColor: '#9BD0F5',
            label: "Acquisitions by year",
            data: data.map(row=>row.count),
          
      }]
    },

    options:{}

  })
};


let selecteddata = data1;

createchart(selecteddata);

button1.addEventListener("click", ()=>{
    selecteddata = data1;
    createchart(selecteddata);
    abouttext.innerText = "This is some placeholder text that will be replaced later. Testing to see what happens if the text overflows";
});
button2.addEventListener("click", ()=>{
    console.log(abouttext.innerText);
    selecteddata = data2;
    createchart(selecteddata);
    
    abouttext.textContent = "BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE BLE ";
    console.log(abouttext.innerText);
});
button3.addEventListener("click", ()=>{
    selecteddata = data3;
    createchart(selecteddata);
    abouttext.innerText = 'MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA \
     MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA\
     MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA\
     ';
});
