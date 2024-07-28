'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Collaboration & Events', href: '/collab' },
  { name: 'Products', href: '/product' },
  { name: 'Workshops', href: '/workshop' },
  { name: 'Video Tutorials', href: '/tutorial' },
]

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
  <header className="fixed x-0 top-0 left-0 right-0 z-50 bg-white shadow-lg">
    <nav aria-label="Global" className="flex items-center justify-between p-4 lg:flex-col">
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Crochelia</span>
            <Image
              src="/images/full-t.png"
              alt=""
              width={200}
              height={100}
            />
          </a>
      </div>
      <div className="flex lg:hidden">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Crochelia</span>
          <Image
            src="/images/icon-t.png"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-14">
        {navigation.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="-mx-3 block px-3 text-base leading-6 text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Crochelia</span>
            <Image
              src="/images/icon-t.png"
              alt=""
              width={32}
              height={32}
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-rose-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <span className="-mx-3 block rounded-lg px-3 py-2 leading-7"/>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  );
};

