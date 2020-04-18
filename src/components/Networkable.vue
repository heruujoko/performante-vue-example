<template>
  <div>
    <ul>
      <li v-for="u in users" :key="u.id">{{ u.first_name }} {{ u.last_name }}</li>
    </ul>

    <button
      @click="findEmma"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >Find Emma</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UserResponse from "@/interfaces/UserResponse";
import User from "@/interfaces/User";
import axios from "axios";
import * as _ from "lodash";

@Component
export default class Networkable extends Vue {
  users: User[];

  constructor() {
    super();
    this.users = [];
  }

  async getData() {
    const resp = await axios.get("https://reqres.in/api/users");
    const parsed: UserResponse = resp.data;
    this.users = parsed.data;
  }

  findEmma() {
    const index = _.findIndex(this.users, (u: User) => {
      return u.first_name == "Emma";
    });
    alert(`emma is at index ${index}`);
  }

  mounted() {
    this.getData();
  }
}
</script>