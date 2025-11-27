import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS classes with clsx
 * @param {...import("clsx").ClassValue} inputs - Class names
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/**
 * Format price in Brazilian Real (BRL)
 * @param {number} value - Price value
 * @returns {string} Formatted price
 */
export function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value)
}

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} phoneNumber - Phone number with country code (e.g., "5511999999999")
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp link
 */
export function generateWhatsAppLink(phoneNumber, message = '') {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

/**
 * Format date in Brazilian format
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
export function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date))
}

/**
 * Scroll to element smoothly
 * @param {string} elementId - Element ID to scroll to
 */
export function scrollToElement(elementId) {
    const element = document.getElementById(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

/**
 * Generate Gumroad buy link
 * @param {string} productId - Gumroad product ID
 * @returns {string} Gumroad product link
 */
export function generateGumroadLink(productId) {
    return `https://gumroad.com/l/${productId}`
}
