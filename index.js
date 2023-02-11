const emojis = ["👨‍💻",  "👷",  "🎶", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("add-btn")
const unshiftBtn =document.getElementById("addbtn")
const popBtn = document.getElementById("remove")
const shiftBtn = document.getElementById("removel")

function renderEmoji() {
    for (let i = 0; i < emojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojis[i]
        emojiContainer.append (emoji)

}

}
renderEmoji()

pushBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("input-el")
    if(emojiInput.value) {
        emojis.push(emojiInput.value)
   emojiInput.value = ""
   emojiContainer.innerHTML = ""
   renderEmoji()

    }
   
}) 

unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("input-el")
    if(emojiInput.value) {
    emojis.unshift(emojiInput.value)
    emojiInput.value = ""
   emojiContainer.innerHTML = ""
   renderEmoji()
 }


})

popBtn.addEventListener("click", function() {
    emojis.pop()
    emojiContainer.innerHTML = ""
    renderEmoji()
})


shiftBtn.addEventListener("click", function() {
    emojis.shift()
    emojiContainer.innerHTML = ""
    renderEmoji()
})




