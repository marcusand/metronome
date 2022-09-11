<script lang="ts">
  import Subpage from '../components/Subpage.svelte';
</script>

<Subpage>
  <div class="container">
    <section>
      <h2>offline usage & installation</h2>
      <p>
        This metronome is offline capable and installable. This means on ios or android
        you can add it to your homescreen and use it like a native app or you can
        "install" it on your desktop computer.
      </p>
      <p>
        For more information see <a
          href="https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/"
          target="_blank">this guide</a
        >.
      </p>
    </section>
    <section>
      <h2>credits</h2>
      <p>
        By
        <a href="https://github.com/marcusand" target="__blank">marcusand</a>. Report any
        issues on <a href="https://github.com/marcusand/metronome">github</a>
        or send me an <a href="mailto:mail@marcusand.de">email</a>
      </p>
    </section>
  </div>
</Subpage>

<style>
  .container {
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 1rem;
  }
</style>
