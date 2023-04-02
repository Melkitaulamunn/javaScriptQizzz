const quizData=[
   
          {
            question: '“Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?',
            a: 'Reşat Nuri Güntekin',
            b: 'Halide Edip Adıvar ',
            c: 'Ziya Gökalp',
            d: 'Ömer Seyfettin',
            e: 'Ayşe Kulin',
            correct: 'a',
          },
          {
            question: 'Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?',
            a: 'Hitliler',
            b: 'Frigyalılar',
            c: 'Elamlar',
            d: 'Sümerler',
            e: 'Urartular',
            correct: 'c',
          },
          {
            question: 'Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?',
            a: 'Endonezya',
            b: 'Sri Lanka',
            c: 'Tayland',
            d: 'Hindistan',
            e: 'Nepal',
            correct: 'a',
          },
          {
            question: ' Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?',
            a: 'Bursa',
            b: 'Ankara',
            c: 'İstanbul',
            d: 'Gaziantep',
            e: 'İzmir',
            correct: 'd',
          },
       
      {
        question: 'Aşağıdakilerden Hangisi Dünya Sağlık Örgütünün Kısaltılmış İsmidir?',
        a: 'Uhw',
        b: 'Unıcef',
        c: 'Who',
        d: 'Nato',
        e: 'Asean',
        correct: 'c',
      },
      {
        question: 'Romen Rakamında Hangi Sayı Yoktur?',
        a: '0',
        b: '50',
        c: '100',
        d: '1000',
        e: '2000',
        correct: 'a',
      },
      
    ]
    const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
    `
    }
  }
})

