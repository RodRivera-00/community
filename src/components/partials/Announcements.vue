<template>
    <div>
        <h5 class="text-light">Announcements</h5>
        <a href="">
            <b-media>
                <b-img slot="aside" blank blank-color="#282828" width="64" alt="placeholder" />
                <h5 class="mt-0 text-light">Media Title</h5>
                <p class="text-light">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                
                </p>
            </b-media>
        </a>
        <a href="">
            <b-media>
                <b-img slot="aside" blank blank-color="#282828" width="64" alt="placeholder" />
                <h5 class="mt-0 text-light">Media Title</h5>
                <p class="text-light">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                
                </p>
            </b-media>
        </a>

        <div class="card-footer">
            <a href="" class="float-right custom-card-link">See All  <v-icon name="chevron-right" class="custom-card-icon"/></a>
        </div>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue';
export default {
 components: {
     'v-icon' : Icon
 }   
}
</script>
