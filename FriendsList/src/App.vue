<template>
  <div class="container">
    <div class="list" v-for="friend in friends">
           <p>{{friend.name}}</p>
           <span v-if="friend.song" >{{friend.song}}</span>
        <span :class="friend.isPlaying ? 'play' : 'pause'" >{{friend.isPlaying}}</span>
    </div>
  </div>
</template>

<script setup>
import Friends from "./friends.json"
import {ref} from "vue";
const friends = ref(Friends.friends)
</script>