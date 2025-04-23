const lyrics = [
    {
      lyric: "Little darlin', it's been a long, cold, lonely winter",
      answer: "Here Comes The Sun",
      options: ["Yesterday", "Here Comes The Sun", "Let It Be", "Blackbird"]
    },
    {
      lyric: "Salt air, and the rust on your door / I never needed anything more",
      answer: "august",
      options: ["Fortnight", "cardigan", "Lover", "august"]
    },
    {
      lyric: "You used to call me on my cell phone / Late night when you need my love",
      answer: "Hotline Bling",
      options: ["NOKIA", "God's Plan", "Hotline Bling", "Rich Flex"]
    },
    {
      lyric: "When the sun shine, we shine together / Told you I'll be here forever / Said I'll always be your friend / Took an oath, I'ma stick it out to the end",
      answer: "Umbrella",
      options: ["Love on the Brain", "Umbrella", "Work", "Don't Stop The Music"]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const lyricEl = document.getElementById('lyric');
  const optionsEl = document.querySelectorAll('.option');
  const feedbackEl = document.getElementById('feedback');
  const nextBtn = document.getElementById('next-btn');
  
  function loadQuestion() {
    const q = lyrics[currentQuestion];
    lyricEl.textContent = `"${q.lyric}"`;
  
    optionsEl.forEach((button, index) => {
      button.textContent = q.options[index];
      button.onclick = () => checkAnswer(button.textContent);
    });
  
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
  }
  
  function checkAnswer(selected) {
    const correct = lyrics[currentQuestion].answer;
  
    if (selected === correct) {
      feedbackEl.textContent = '✅ Correct!';
      score++;
    } else {
      feedbackEl.textContent = `❌ Nope. The correct answer was "${correct}".`;
    }
  
    nextBtn.style.display = 'inline-block';
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
  
    if (currentQuestion < lyrics.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  };
  
  function showFinalScore() {
    lyricEl.textContent = `🎉 You scored ${score} out of ${lyrics.length}!`;
    optionsEl.forEach(btn => btn.style.display = 'none');
    feedbackEl.textContent = '';
    nextBtn.textContent = 'Play Again';
    nextBtn.onclick = () => location.reload();
  }
  
  loadQuestion();