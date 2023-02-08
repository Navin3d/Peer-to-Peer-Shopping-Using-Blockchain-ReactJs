const Footer = () => {
    return (
        <footer class="py-6 px-6 flex justify-between bg-gray-800">
            <div class="w-2/3 pr-10">
                <h3 class="mb-5 font-semibold text-gray-400">About</h3>

                <p class="text-lg text-gray-500">Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla.</p>
            </div>

            <div class="w-1/3">
                <h3 class="mb-5 font-semibold text-gray-400">Menu</h3>

                <ul class="space-y-2">
                    <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">About</a></li>
                    <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">Contact</a></li>
                    <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">Privacy policy</a></li>
                    <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">Term of use</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
