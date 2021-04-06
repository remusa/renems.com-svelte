<script lang="ts">
	import Github from '../assets/icons/github.svelte'
	import Linkedin from '../assets/icons/linkedin.svelte'
	import Mail from '../assets/icons/mail.svelte'
	import SocialIcon from './SocialIcon.svelte'
</script>

<div class="flex justify-between">
	<SocialIcon to="/mail" name="Mail"><Mail /></SocialIcon>
	<SocialIcon to="/github" name="GitHub"><Github /></SocialIcon>
	<SocialIcon to="/linkedin" name="LinkedIn"><Linkedin /></SocialIcon>
</div>
