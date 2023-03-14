<template>
    <div>
        <button type="button" data-waa-click="foo" data-waa-name="embedded-event">Send Click Event</button>
        <a data-waa-click="bar" data-waa-name="embedded-event" href="https://adequate.country" target="_blank">Send Click Link</a>
        <p>Click me nothing happens; click green background; magic</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
    background-color: yellowgreen;
    align-items: center;
}
</style>

