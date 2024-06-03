import { Component } from '@angular/core';
import { SelectComponent, SelectItem } from "../select/select.component";

@Component({
    selector: 'app-find-location',
    standalone: true,
    templateUrl: './find-location.component.html',
    styleUrl: './find-location.component.css',
    imports: [SelectComponent]
})
export class FindLocationComponent {
    private countries: SelectItem[] = [    
        { value: 'EGY', label: 'Egypt' },
        { value: 'IND', label: 'India' },
        { value: 'LKA', label: 'Sri-Lanka' },
        { value: 'PAK', label: 'Pakistan' },
        { value: 'NPL', label: 'Nepal' },
        { value: 'VNM', label: 'Vietnam' },
        { value: 'BGD', label: 'Bangladesh' },
    ];

    countryItems = this.countries.map(c => ({ ...c, icon: `https://s3-api.guavapay.com/public-icons/countries/1x1/${c.value.toLowerCase()}.svg` }));

    onCountrySelect(country: SelectItem): void {
        const index = this.countries.findIndex(c => c.value === country.value);
        const nodes = document.querySelectorAll<HTMLDivElement>('.map');
        if (nodes) {
            nodes.forEach(node => node.style.display = 'none');
            nodes[index].style.display = 'block';
        }
    }
}
