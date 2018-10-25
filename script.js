let myChart = document.getElementById('myChart').getContext('2d');

    let userChart = new Chart(myChart ,{
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:['Racine', 'Milwaukee' , 'Chicago', 'Madison', 'Greenbay'],
            datasets:[{
                label: 'Population',
                data:[
                    7000,
                    14452,
                    10004,
                    12000,
                    15005,
                ],
                backgroundColor:[
                    '#0283ff',
                    '#f12e2f',
                    '#886CFF',
                    '#FFc429',
                    '#3DC73D',

                ],
                borderWidth:1,
                borderColor: 'black',
                hoverBorderWidth:3,
                hoverBorderColor: 'transparent',
            }]
        },
        options:{}
    });