<script lang="ts">
	import Github from '../../static/icons/github.svelte'
	import Linkedin from '../../static/icons/linkedin.svelte'
	import Mail from '../../static/icons/mail.svelte'
	import SocialIcon from './SocialIcon.svelte'
</script>

<div class="flex justify-between">
	<SocialIcon to="/mail" name="Mail"><Mail /></SocialIcon>
	<SocialIcon to="/github" name="GitHub"><Github /></SocialIcon>
	<SocialIcon to="/linkedin" name="LinkedIn"><Linkedin /></SocialIcon>
</div>
