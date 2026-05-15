/*
 * @Author: Telliex telliexyuzo@gmail.com
 * @Date: 2026-05-15 14:34:34
 * @LastEditors: Telliex telliexyuzo@gmail.com
 * @LastEditTime: 2026-05-15 15:27:27
 * @FilePath: /week-02-portfolio/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-blue-900">
          Telliex Chiu
        </h1>
        <p className="mt-3 text-lg font-medium text-blue-500">
          CS Student &amp; Frontend Engineer
        </p>
        <p className="mt-6 max-w-md text-base leading-7 text-blue-600">
          Frontend engineer with 8+ years of experience building products at
          Yahoo Taiwan, Shinho, eCloudvalley, and Awkns — across Taiwan, China,
          and the U.S. Led cross-functional teams, shipped at scale, and now
          deepening my CS foundations. Based in San Jose, CA. Bilingual in
          English and Mandarin.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center rounded-full bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="inline-flex h-10 items-center rounded-full border border-blue-300 px-6 text-sm font-medium text-blue-700 transition-colors hover:border-blue-400 hover:bg-blue-50"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}