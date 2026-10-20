// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Deployed as a GitHub Pages project site: https://codingpandaren.github.io/reforger-c130-docs/
export default defineConfig({
	site: 'https://codingpandaren.github.io',
	base: '/reforger-c130-docs',
	integrations: [
		starlight({
			title: 'C-130J Hercules',
			description: 'Player and crew manual for the C-130J Super Hercules mod for Arma Reforger.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/codingpandaren/reforger-c130-docs' },
			],
			customCss: ['./src/styles/custom.css'],
			pagination: true,
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Installation', slug: 'start/installation' },
						{ label: 'Quick start: first flight', slug: 'start/quick-start' },
					],
				},
				{
					label: 'Basics',
					items: [
						{ label: 'Cockpit, seats and crew', slug: 'basics/cockpit-and-crew' },
						{ label: 'Controls and keybinds', slug: 'basics/controls' },
						{ label: 'Power-up and engine start', slug: 'basics/engine-start' },
						{ label: 'Taxi and takeoff', slug: 'basics/taxi-and-takeoff' },
						{ label: 'Approach and landing', slug: 'basics/landing' },
						{ label: 'Shutdown and parking', slug: 'basics/shutdown' },
					],
				},
				{
					label: 'Flying',
					items: [
						{ label: 'Handling and flight model', slug: 'flying/flight-model' },
						{ label: 'Trim and flaps', slug: 'flying/trim-and-flaps' },
						{ label: 'Autopilot', slug: 'flying/autopilot' },
						{ label: 'Loiter and orbit', slug: 'flying/loiter' },
						{ label: 'Flight plan and approach', slug: 'flying/navigation' },
						{ label: 'Cameras and views', slug: 'flying/cameras' },
					],
				},
				{
					label: 'Aircraft systems',
					items: [
						{ label: 'Cockpit displays (MFDs)', slug: 'systems/mfd' },
						{ label: 'Electrical and APU', slug: 'systems/electrical' },
						{ label: 'Hydraulics', slug: 'systems/hydraulics' },
						{ label: 'Fuel', slug: 'systems/fuel' },
						{ label: 'Engines and oil', slug: 'systems/engines' },
						{ label: 'Fire and damage', slug: 'systems/fire-and-damage' },
						{ label: 'Lights and doors', slug: 'systems/lights-and-doors' },
					],
				},
				{
					label: 'Cargo operations',
					items: [
						{ label: 'Cargo ramp', slug: 'cargo/ramp' },
						{ label: 'Loading vehicles', slug: 'cargo/vehicles' },
						{ label: 'Cargo crates', slug: 'cargo/crates' },
						{ label: 'Airdrop', slug: 'cargo/airdrop' },
						{ label: 'LAPES', slug: 'cargo/lapes' },
						{ label: 'Paratroopers', slug: 'cargo/paratroopers' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'GBU-43/B MOAB', slug: 'advanced/moab' },
						{ label: 'Radar', slug: 'advanced/radar' },
						{ label: 'Game Master', slug: 'advanced/game-master' },
						{ label: 'Multiplayer notes', slug: 'advanced/multiplayer' },
						{ label: 'Troubleshooting and FAQ', slug: 'advanced/faq' },
					],
				},
			],
		}),
	],
});
