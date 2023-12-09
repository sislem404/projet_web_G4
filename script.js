
document.addEventListener('DOMContentLoaded', async function () {
    const movieListContainer = document.querySelector('.movieList');
    const apiUrl = 'https://ghibliapi.vercel.app/films';

    try {
   
        const response = await fetch(apiUrl);

        
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        
        const data = await response.json();
        data.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movieCard';

            const movieImage = document.createElement('img');
            movieImage.className = 'movieImage';
            movieImage.src = movie.image;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('div');
            movieTitle.className = 'movieTitle';
            movieTitle.textContent = movie.title;
            movieTitle.style.textAlign="left";

            const movieProd = document.createElement('div');
            movieProd.className = 'movieProd';
            movieProd.textContent = `${movie.director}`;
           
            const movieOr=document.createElement('div');
            movieOr.className='movie0r';
            movieOr.textContent= `${movie.original_title}`;
            


            const detailButton = document.createElement('button');
            detailButton.textContent = 'VIEW' 
            detailButton.addEventListener(onclick,(e)=>{
                document.querySelector(".popup").style.display = "block";
                console.log('hello');
              })
              const containerBTN=document.createElement('div');
              containerBTN.className='gbl';


            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieProd);
            containerBTN.appendChild(detailButton);
            containerBTN.appendChild(movieOr);
            movieCard.appendChild(containerBTN);
            movieListContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});
