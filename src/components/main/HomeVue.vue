<template>
    <div>
        <TopRated />
        <MostPopular />
    </div>
</template>

<script>
import TopRated from './TopRated.vue';
import MostPopular from './MostPopular.vue';

export default {
    components: {
        TopRated,
        MostPopular
    }
};
</script>
<style>
</style>