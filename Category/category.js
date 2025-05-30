const xhr = new XMLHttpRequest();
xhr.open('GET', './category.json', true);
xhr.responseType = 'json';

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = xhr.response;
    const container = document.getElementById('articles');

    data.categories.forEach(category => {
  
      const categoryHeader = document.createElement('h1');
      categoryHeader.textContent = category.category_name;
      container.appendChild(categoryHeader);

      category.articles.forEach(article => {
    
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const summary = document.createElement('p');
        summary.textContent = article.summary;

    
        const howToHeader = document.createElement('h3');
        howToHeader.textContent = 'How to Achieve:';
        const howToList = document.createElement('ul');
        article.tips.how_to.forEach(step => {
          const item = document.createElement('li');
          item.textContent = step;
          howToList.appendChild(item);
        });

     
        const benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
        const benefitsList = document.createElement('ul');
        article.tips.benefits.forEach(benefit => {
          const item = document.createElement('li');
          item.textContent = benefit;
          benefitsList.appendChild(item);
        });

    
        articleDiv.appendChild(title);
        articleDiv.appendChild(summary);
        articleDiv.appendChild(howToHeader);
        articleDiv.appendChild(howToList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

   
        container.appendChild(articleDiv);
      });
    });
  } else {
    console.error('Failed to load data:', xhr.status);
  }
};

xhr.send();
