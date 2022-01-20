<template>
    <div>
        <input type="text" name="email" placeholder="nome" id="nome">
        <input type="text" name="email" id="email" placeholder="email">
        <button>TESTE</button>
        <router-view/>
    </div>
</template>

<script>

export default {
    created(){
        // this.parametroDaRota = this.$route.params.dado;
    },
    dado(){
        return {
            paramatroDaRota: "nada"
        }
    }
}
</script>


<style scoped>
#email{
    margin-top: 1%;
    margin-bottom: 1%;
}

</style>