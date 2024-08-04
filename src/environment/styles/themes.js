function SwitchTheme(themeName) {
    const theme = themes [themeName]
    document.documentElement.style.setProperty('--bar-color', theme.bar_color)
    document.documentElement.style.setProperty('--line-color', theme.line_color)
    document.documentElement.style.setProperty('--text-color', theme.text_color)
    document.documentElement.style.setProperty('--default-highlight-color', theme.default_highlight_color)
    document.documentElement.style.setProperty('--secundary-highlight-color', theme.secundary_highlight_color)
    document.documentElement.style.setProperty('--presentation-background-color', theme.presentation_background_color)
    document.documentElement.style.setProperty('--presentation-button-highlight-color', theme.presentation_button_highlight_color)
    document.documentElement.style.setProperty('--presentation-button-border-color', theme.presentation_button_border_color)
    document.documentElement.style.setProperty('--about-background-color', theme.about_background_color)
    document.documentElement.style.setProperty('--info-box-background-color', theme.info_box_background_color)
    document.documentElement.style.setProperty('--progress-bar-background-color', theme.progress_bar_background_color)
    document.documentElement.style.setProperty('--progress-bar-color', theme.progress_bar_color)
    document.documentElement.style.setProperty('--progress-bar-highlight-color', theme.progress_bar_highlight_color)
    document.documentElement.style.setProperty('--progress-bar-label-color', theme.progress_bar_label_color)
    document.documentElement.style.setProperty('--progress-bar-label-highlight-color', theme.progress_bar_label_highlight_color)
    document.documentElement.style.setProperty('--default-container-background-color', theme.default_container_background_color)
    document.documentElement.style.setProperty('--projects-background-color', theme.projects_background_color)
    document.documentElement.style.setProperty('--skill-label-color', theme.skill_label_color)
    document.documentElement.style.setProperty('--default-hover-color', theme.default_hover_color)
    document.documentElement.style.setProperty('--project-window-color', theme.project_window_color)
    document.documentElement.style.setProperty('--info-box-color', theme.info_box_color)
}

const dark = {
    'bar_color': ' rgb(40, 40, 40)',
    'line_color': ' rgba(255, 255, 255, 0.2)',
    'text_color': ' rgb(240, 240, 240)',
    'default_highlight_color': ' rgb(4, 194, 201)',
    'secundary_highlight_color': ' rgb(4, 194, 201)',
    'presentation_background_color': ' rgb(30, 30, 30)',
    'presentation_button_border_color': ' white',
    'about_background_color': ' rgba(35,35,35, 1)',
    'info_box_background_color': ' rgb(50, 50, 50, 1)',
    'progress_bar_background_color': ' rgba(255, 255, 255, 0.1)',
    'progress_bar_color': ' rgb(120, 125, 130)',
    'progress_bar_highlight_color': ' rgb(4, 194, 201)',
    'progress_bar_label_color': ' rgb(43, 45, 45)',
    'progress_bar_label_highlight_color': ' rgb(0, 81, 83)',
    'default_container_background_color': ' rgb(0, 0, 0, 0.08)',
    'projects_background_color': ' rgba(30, 30, 30, 1)',
    'skill_label_color': ' rgba(200, 200, 200, 1)',
    'default_hover_color': ' rgba(0, 0, 0, 0.1)',
    'project_window_color': ' rgba(30, 30, 30)',
}


const light ={
    'bar_color':' rgba(14,17,24)',
    'line_color':' rgba(0, 0, 0, 0.2)',
    'text_color':' rgb(64, 64, 64)',
    'default_highlight_color':' rgba(227, 27, 109)',
    'secundary_highlight_color':' rgb(4, 194, 201)',
    'presentation_background_color':' rgba(14,17,24)',
    'presentation_button_highlight_color':' rgb(4, 194, 201)',
    'presentation_button_border_color':' white',
    'about_background_color':' rgba(255, 255, 255, 1)',
    'info_box_background_color':' rgb(255, 255, 255, 1)',
    'progress_bar_background_color':' rgba(0, 0, 0, 0.1)',
    'progress_bar_color':' rgb(51, 50, 75)',
    'progress_bar_highlight_color':' rgb(202, 22, 94)',
    'progress_bar_label_color':' rgb(22,26,35)',
    'progress_bar_label_highlight_color':' rgb(117, 13, 55)',
    'default_container_background_color':' rgba(0, 0, 0, 0.02)',
    'projects_background_color':' rgba(240, 240, 240, 1)',
    'skill_label_color':' rgba(66, 66, 66, 1)',
    'default_hover_color':' rgba(0, 0, 0, 0.1)',
    'project_window_color':' rgba(255, 255, 255)',
    'info_box_color':' rgba(230, 230, 230)',
}


const themes = {
    'dark':dark,
    'light':light,
}

export default SwitchTheme