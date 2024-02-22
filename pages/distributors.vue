<template>
  <div class="distributor-list" v-if="distributors.length"> 
      <div class="distributor" v-for="distributor in distributors" :key="distributor.id">
        <h2>{{ distributor.companyName }}</h2> 
        <p>{{ distributor.address }}</p>  
        <p>{{ distributor.town }},
          {{ distributor.postCode }}</p>
        <p>{{ distributor.telephone }}</p>
      </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const config = useRuntimeConfig();
const strapiBaseUrl = config.public.STRAPI_BASE_URL;
const distributors = ref([]);

async function fetchDistributors() {
  // 1. Fetch distributor IDs
  const idsResponse = await axios.get(`${strapiBaseUrl}/api/distributors?fields=id`);
  const distributorIds = idsResponse.data.data.map(item => item.id); 

  // 2. Fetch individual distributors
  const distributorPromises = distributorIds.map(id => 
      axios.get(`${strapiBaseUrl}/api/distributors/${id}`)
  );

  const responses = await Promise.all(distributorPromises);
  distributors.value = responses.map(response => response.data.data);
}

onMounted(fetchDistributors);
</script>
