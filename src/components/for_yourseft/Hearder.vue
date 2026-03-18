<script setup>

import { ref, onMounted, onUnmounted } from "vue"

const Text = "Student Request For there own or Firend "
const Textdisplay = ref()
const fullText = "Welcome to SETEC Institute Request Absence                "
const displayText = ref("")
let i = 0
let timer

onMounted(() => {
  timer = setInterval(() => {
    if (i < fullText.length) {
      displayText.value += fullText[i]
      i++
    } else {
      displayText.value = ""
      i = 0
    }
  }, 200)
}),

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<template>
  <div class="hearder">
    <img
      src="@/assets/img/setecLogo.png"
      alt="SETEC Logo"
      class="w-100"
    />
    <div class="flex flex-row-reverse">
        <router-link to="/HearderP"><button class="bg-green-500">Parents</button></router-link>
        <router-link to="/Hearder"><button class="bg-amber-400">Students</button></router-link>
        
    </div>
    <!-- Typing animation -->
    <p class="text-xl font-semibold text-gray-700">
      {{ displayText }}
      <span class="animate-pulse">|</span>
    </p>
    
    <h1 class="max-w-2xl text-gray-700 text-lg">
      This platform allows students and parents to easily submit, track,
      and manage absence requests.  
      Please ensure all information is accurate before submitting your request.
    </h1>
  </div>
  <div class="content">
        <div class="title"><h1>Student Request for there own or Firend</h1></div>
        <div class="boxContent">
            <form action="http://localhost:3000/sent" method="POST">
            <label>Fullname:</label>
            <input type="text" name="fullname" placeholder="Enter your fullname" required>

            <label>Gender:</label>
            <select name="gender" placeholder="Gender" required>
              <option value="Male">Male</option>
              <option value="Femal">Femal</option>
            </select>

            <label>Nationality:</label>
            <select name="nationality" required="">
              <option value="Khmer">Khmer</option>
              <option value="Other">Other</option>
            </select>

            <label>Date of birth:</label>
            <input type="datetime" name="datebirth" placeholder="Enter your Date of birth" required>

            <label>Currently Address:</label>
            <textarea name="currentlyaddress" placeholder="Enter your Currently Address" required></textarea>

            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required>

            <label>Phone Number:</label>
            <input type="number" name="phonenumber" placeholder="Enter your Phone Number" required="">
            
            <label>Group Name:</label>
            <input type="text" name="groupname" placeholder="Enter your Group Name" required>

            <label>Major:</label>
            <select name="major" required>
                <option value="MIS">MIS</option>
                <option value="Designer">Designer</option>
                <option value="BIT">BIT</option>
            </select>

            <label>Time Study</label>
            <select name="timestudy" required>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>

            <label>Request Absence</label>
            <input type="number" name="requestabsence" placeholder="Enter How many day you want to Request" required>

            <label>Start Date</label>
            <input type="datetime" name="startdate" placeholder="Enter Start Date" required>

            <label>End Date</label>
            <input type="datetime" name="enddate" placeholder="Enter End Date" require>

            <label>Description:</label>
            <textarea name="description" placeholder="Enter your description" required></textarea>

            <button type="submit">Send To Telegram</button>
        </form>
        </div>
  </div>

</template>

<style scoped>
</style>

