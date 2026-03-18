<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const fullText = "Welcome to SETEC Institute Request Absence"
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
  }, 150)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="hearder">
    <div class="logo-container">
      <img src="@/assets/img/setecLogo.png" alt="SETEC Logo" />
      <span class="logo-text">SETEC Institute</span>
    </div>
    
    <div class="nav-buttons">
      <router-link to="/Hearder">
        <button class="students-btn">Students</button>
      </router-link>
      <router-link to="/HearderP">
        <button class="parents-btn active">Parents</button>
      </router-link>
    </div>

    <p class="tagline">
      {{ displayText }}
      <span class="cursor">|</span>
    </p>

    <p class="description">
      This platform allows students and parents to easily submit, track,
      and manage absence requests. Please ensure all information is accurate before submitting your request.
    </p>
  </div>

  <div class="content">
    <div class="title">
      <h1>Parent Request for Their Child</h1>
    </div>
    <div class="boxContent">
      <form action="https://request-absence-bot.onrender.com/sentP" method="POST">
        <label>Parent Full Name:</label>
        <input type="text" name="Pfullname" placeholder="Enter your full name" required>

        <label>Relationship to Student:</label>
        <select name="Pgender" required>
          <option value="" disabled selected>Select relationship</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Guardian">Guardian</option>
          <option value="Other">Other</option>
        </select>

        <label>Student Full Name:</label>
        <input type="text" name="Sfullname" placeholder="Enter student full name" required>

        <label>Student Gender:</label>
        <select name="gender" required>
          <option value="" disabled selected>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Nationality:</label>
        <select name="nationality" required>
          <option value="" disabled selected>Select nationality</option>
          <option value="Khmer">Khmer</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="datebirth" required>

        <label>Current Address:</label>
        <textarea name="currentlyaddress" placeholder="Enter current address" required></textarea>

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required>

        <label>Phone Number:</label>
        <input type="tel" name="phonenumber" placeholder="Enter your phone number" required>
        
        <label>Group Name:</label>
        <input type="text" name="groupname" placeholder="Enter student group name" required>

        <label>Major:</label>
        <select name="major" required>
          <option value="" disabled selected>Select major</option>
          <option value="MIS">MIS</option>
          <option value="Designer">Designer</option>
          <option value="BIT">BIT</option>
        </select>

        <label>Time Study</label>
        <select name="timestudy" required>
          <option value="" disabled selected>Select time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <label>Request Absence (Days):</label>
        <input type="number" name="requestabsence" placeholder="How many days?" min="1" required>

        <label>Start Date</label>
        <input type="date" name="startdate" required>

        <label>End Date</label>
        <input type="date" name="enddate" required>

        <label>Description:</label>
        <textarea name="description" placeholder="Enter reason for absence request" required></textarea>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
