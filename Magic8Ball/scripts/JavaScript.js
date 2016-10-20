
function getAnswer()
{
    var answer = ["Ready...Set...No!", "I had fun once. I hated it.", "Try again never.", "Not bloody likely.", "Umm, no.", "I heard you, I just don't care." ];
    var rand = answer[Math.floor(Math.random() * answer.length)];
    document.getElementById("option").innerHTML = rand;
}