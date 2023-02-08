function showTime() {
    // setting the variable now to get the computer's date/time
    const now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let period = 'AM'

    // if hour is 0 which is midnight then
    if (hour == 0) {
        hour = 12
    }

    // every hour greater than 12 PM
    if (hour > 12) {
        hour = hour - 12
        period = 'PM'
    }

    // massage the hour, minute, and second with padding of 0
    hour = (hour < 10) ? `0${hour}` : hour
    minute = (minute < 10) ? `0${minute}` : minute
    second = (second < 10) ? `0${second}` : second

    clock.innerText = `${hour}:${minute}:${second} ${period}`
}

// get a handle to the element that has the id of clockDisplay
const clock = document.querySelector('#clockDisplay')
// create an interval that fires off every 1 second
setInterval(showTime, 1000)

// background
const background = document.querySelector('.container')
// find orange button
const orangeBtn = document.querySelector('#orange')
// find blue button
const blueBtn = document.querySelector('#blue')
// find green button
const greenBtn = document.querySelector('#green')
// find grey button
const greyBtn = document.querySelector('#lightGrey')
// find black button
const blackBtn = document.querySelector('#black')
// find white button
const whiteBtn = document.querySelector('#white')

// background buttons
const night = document.querySelector('#night')
const sunset = document.querySelector('#sunset')
const mountain = document.querySelector('#mountain')
const plant = document.querySelector('#plant')
const dog = document.querySelector('#dog')
const architecture = document.querySelector('#architecture')

// add an event listener to button click event
// orange
orangeBtn.addEventListener('click', function () {
    clock.style.color = 'coral'
})
// blue
blueBtn.addEventListener('click', function () {
    clock.style.color = '#6495ed'
})
// green
greenBtn.addEventListener('click', function () {
    clock.style.color = 'green'
})
// grey
greyBtn.addEventListener('click', function () {
    clock.style.backgroundColor = 'rgba(192, 192, 192,.8)'
})
// black
blackBtn.addEventListener('click', function () {
    clock.style.backgroundColor = 'rgba(0,0,0,.8)'
})
// white
whiteBtn.addEventListener('click', function () {
    clock.style.backgroundColor = 'rgba(255,255,255,.8)'
})
// night
night.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
})
// sunset
sunset.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)'
})
// mountain
mountain.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
})
// plants
plant.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)'
})
// dogs
dog.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
})
// architecture
architecture.addEventListener('click', function () {
    background.style.backgroundImage = 'url(https://images.unsplash.com/photo-1548335599-8ed902028f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1146&q=80)'
})