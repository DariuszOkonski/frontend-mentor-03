const content__container = document.querySelector('.content__container');
let dayOfWeek = new Date().getDay() - 1;
const jsonData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];


const buildPost = (day, amount, index) => {
    const before = document.createElement('div');
    before.classList.add('before');
    before.innerText = `$${amount}`;

    const post__inner = document.createElement('div');
    post__inner.classList.add('post__inner')
    if(index === dayOfWeek) {
        post__inner.classList.add('current');
    }
    post__inner.style.height = `${amount}%`;
    post__inner.appendChild(before);

    const post__container = document.createElement('div')
    post__container.classList.add('post__container');
    post__container.appendChild(post__inner);
    
    const post__day = document.createElement('span');
    post__day.classList.add('post__day');
    post__day.textContent = day;

    const post = document.createElement('div');
    post.classList.add('post')
    post.appendChild(post__container);
    post.appendChild(post__day);
    
    return post;
}

const buildChart = (data) => {
    data.forEach((element, index) => {
        const post = buildPost(element.day, element.amount, index)
        content__container.appendChild(post);
    });

}



const run = async () => {
    try {
        // json not working in ghpages
        const response = await fetch('../data.json')
        const data = await response.json();
        buildChart(jsonData);        

    } catch (error) {
        console.log('no data fetched')        
    }
}

run();